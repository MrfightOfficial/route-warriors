import { Component } from '../riplet.min.js';

export class JobSearch extends Component {
    constructor() {
        super();
        this.state = {
            jobs: [],
            filters: {
                location: '',
                company: '',
                type: 'all'
            }
        };
    }

    async fetchJobs() {
        try {
            const response = await fetch('/api/jobs', {
                method: 'POST',
                body: JSON.stringify(this.state.filters)
            });
            this.state.jobs = await response.json();
            this.render();
        } catch (error) {
            console.error('Error fetching jobs:', error);
        }
    }

    template() {
        return `
            <div class="job-search">
                <div class="filters">
                    <input type="text" 
                           placeholder="Location" 
                           @input="updateLocation">
                    <select @change="updateCompany">
                        <option value="">All Companies</option>
                        <option value="amazon">Amazon</option>
                        <option value="fedex">FedEx</option>
                        <option value="ups">UPS</option>
                        <option value="usps">USPS</option>
                    </select>
                </div>
                <div class="job-listings">
                    ${this.renderJobs()}
                </div>
            </div>
        `;
    }

    renderJobs() {
        return this.state.jobs.map(job => `
            <div class="job-card">
                <h3>${job.title}</h3>
                <p>${job.company}</p>
                <p>${job.location}</p>
                <button @click="applyJob(${job.id})">Apply Now</button>
            </div>
        `).join('');
    }
}
