import { HeroSection } from "../components/HeroTeam"
import { IntroTeamsSection } from "../components/IntroTeam"
import { VideoPresentation } from "../components/VideoPresentation"
import { MissionAndValues } from "../components/MissionAndValues"
import { TeamProfiles } from "../components/TeamProfiles"
import { Impact } from "../components/Impact"

const AboutUs = () => {
    return (
        <>
            <HeroSection />
            <IntroTeamsSection />
            <VideoPresentation />
            <MissionAndValues />
            <TeamProfiles />
            <Impact />
        </>
    )
}

export default AboutUs 