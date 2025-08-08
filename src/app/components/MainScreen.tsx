import React from "react";
import JourneyScreen from "@/app/screens/journey/JourneyScreen";

interface MainScreenProps {
    activeSection: string;
}

export default function MainScreen({ activeSection }: MainScreenProps) {
    const getContent = () => {
        switch (activeSection) {
            case "Journey":
                return <JourneyScreen />;
            case "About":
                return "About Me - Learn who I am and what drives me";
            case "Creations":
                return "My Creations - Explore my projects and work";
            case "Thoughts":
                return "My Thoughts - Read my insights and reflections";
            case "Connect":
                return "Let's Connect - Get in touch and collaborate";
            default:
                return "Welcome to my Journey - Discover my path and experiences";
        }
    };

    return (

        <div style={{ padding: "2rem" }} className="outfit-font">
            {/* TODO - Add Variable  */}
            {getContent()}
        </div>
    );
}