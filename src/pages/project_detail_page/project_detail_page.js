import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

import '../../styles/project.css';
import ImageCarousel from "./component/carousel";
export default function ProjectDetailPage() {
    let { slug } = useParams();
    return <Container >
        <div style={{ height: 60 }} />
        <ImageCarousel />
        <div style={{ height: 30 }} />
        <div className="title w-100">
            Description
        </div>
        <div className="body w-100">
            Picto is a single-page personal portfolio website made with Figma. This Portfolio is designed based on extensive UX Research to provide the best experience to your client. You can use our template as a Designer. Developer. Freelancer. Architecture. Ceo. Team Leader. Influencer. Creator. Interior Designer. Handymen. Graphic Designer. Video Editor. Social Media Manager. Online Tutor. Online Recruiter. Email Marketer. Content Writer. SEC Expert. Fashion Designer. Model.
            You can edit this Figma Template easily. it's 1007, customizable. All layers. groups. and components are logically named. All shapes are resizable and editable with no quality loss. It's based on Twitter Bootstrap Grid 1170px.
            This Figma Template is perfect for converting into HTML. WordPress. Joomla. and other computer languages.
        </div>
        <div className="title w-100">
            Features
        </div>
        <div className="body w-100">
            <ol>
                <li>Components</li>
                <li>Responsive in Any Device</li>
                <li>Creative Layout</li>
                <li>Fast, Lightweight & Powerful</li>
                <li>Smooth Transition Effects</li>
                <li>Free Google Fonts</li>
                <li>Developer Friendly</li>
            </ol>
        </div>
        <div>

            <div className="title w-100">
                Links
            </div>
        </div>
        <div style={{ height: 60 }} />

    </Container>
}