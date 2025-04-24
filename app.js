import { Riplet, Component } from './riplet.min.js';

class RouteWarriors extends Component {
    constructor() {
        super();
        this.state = {
            isAuthenticated: false,
            jobs: [],
            leaderboard: [],
            verificationStatus: null
        };
    }

    async init() {
        // Initialize Discord integration
        this.initDiscord();
        
        // Set up router
        this.router.addRoutes([
            { path: '/', component: HomeComponent },
            { path: '/about', component: AboutComponent },
            { path: '/game', component: GameComponent },
            { path: '/jobs', component: JobsComponent },
            { path: '/verify', component: VerifyComponent },
            { path: '/community', component: CommunityComponent }
        ]);
    }

    async initDiscord() {
        // Discord integration code
        const discordBtn = document.querySelector('.discord-btn');
        discordBtn.addEventListener('click', () => {
            window.open('https://discord.gg/routewarriors', '_blank');
        });
    }
}

// Initialize the application
const app = new RouteWarriors();
app.mount('#app');
