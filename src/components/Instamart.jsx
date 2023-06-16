import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
    return (
        <div>
            <h1>{title}</h1>
            <button onClick={setIsVisible}>
                {isVisible ? "Hide" : "Show"}
            </button>
            {isVisible && <h4>{description}</h4>}
        </div>
    );
};

const Instamart = () => {
    const [visibleSection, setVisibleSection] = useState("");
    return (
        <div>
            <h1>This is Instamart</h1>
            <Section
                title="About"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                isVisible={visibleSection === "about"}
                setIsVisible={() =>
                    setVisibleSection(visibleSection === "about" ? "" : "about")
                }
            ></Section>
            <Section
                title="Profile"
                description=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum "
                isVisible={visibleSection === "profile"}
                setIsVisible={() =>
                    setVisibleSection(
                        visibleSection === "profile" ? "" : "profile"
                    )
                }
            ></Section>
            <Section
                title="Career"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum "
                isVisible={visibleSection === "career"}
                setIsVisible={() =>
                    setVisibleSection(
                        visibleSection === "career" ? "" : "career"
                    )
                }
            ></Section>
        </div>
    );
};

export default Instamart;
