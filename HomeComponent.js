import { Component } from '../riplet.min.js';

export class HomeComponent extends Component {
    constructor() {
        super();
        this.state = {
            discordMembers: 0,
            activeJobs: 0
        };
    }

    async init() {
        await this.fetchDiscordStats();
    }

    async fetchDiscordStats() {
        try {
            const response = await fetch('/api/discord-stats');
            const stats = await response.json();
            this.state.discordMembers = stats.memberCount;
            this.render();
        } catch (error) {
            console.error('Error fetching Discord stats:', error);
        }
    }

    template() {
        return `
            <div class="home-stats">
                <div class="stat-box">
                    <h3>${this.state.discordMembers}</h3>
                    <p>Discord Members</p>
                </div>
                <div class="stat-box">
                    <h3>${this.state.activeJobs}</h3>
                    <p>Active Jobs</p>
                </div>
            </div>
        `;
    }
}
