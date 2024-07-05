import Benefits from "./components/sections/benefits"
import HowItworks from "./components/sections/howItworks"
import PresentationIdeas from "./components/sections/presentation"
import Depositions from './components/sections/depositions'
import FrequentlyAsked from "./components/sections/frequentlyAsked"
import Purchase from "./components/sections/purchase"
import DolarDropPresentation from "./components/sections/DropDolarPresentation"
import VideoSection from "./components/sections/videoSection"

export default function () {

    return (
        <>
            <DolarDropPresentation />
            <VideoSection />
            <PresentationIdeas />
            <Benefits />
            <HowItworks />
            <Depositions />
            <Purchase />
            <FrequentlyAsked />
        </>
    )
}