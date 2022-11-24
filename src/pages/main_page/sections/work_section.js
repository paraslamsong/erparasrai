import { Col, Container, Row } from "react-bootstrap";

export default function WorkSection() {
    return (
        <div id='workbg'>
            <Container>
                <Row className="align-items-center">
                    <Col md={6} sm={12} style={{ paddingRight: 170 }}>
                        <div id="worktitle">Work</div>
                        <div id="workinformation">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non.
                        </div>
                    </Col>

                    <Col md={6} sm={12}>
                        <Row>
                            <Col className="workcontainer">
                                <div className="workiconbg">
                                    <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.3333 16.6667H6.66667C6.31305 16.6667 5.97391 16.8072 5.72386 17.0573C5.47381 17.3073 5.33333 17.6465 5.33333 18.0001C5.33333 18.3537 5.47381 18.6928 5.72386 18.9429C5.97391 19.1929 6.31305 19.3334 6.66667 19.3334H17.3333C17.687 19.3334 18.0261 19.1929 18.2761 18.9429C18.5262 18.6928 18.6667 18.3537 18.6667 18.0001C18.6667 17.6465 18.5262 17.3073 18.2761 17.0573C18.0261 16.8072 17.687 16.6667 17.3333 16.6667ZM17.3333 11.3334H9.33333C8.97971 11.3334 8.64057 11.4739 8.39052 11.7239C8.14048 11.974 8 12.3131 8 12.6667C8 13.0204 8.14048 13.3595 8.39052 13.6096C8.64057 13.8596 8.97971 14.0001 9.33333 14.0001H17.3333C17.687 14.0001 18.0261 13.8596 18.2761 13.6096C18.5262 13.3595 18.6667 13.0204 18.6667 12.6667C18.6667 12.3131 18.5262 11.974 18.2761 11.7239C18.0261 11.4739 17.687 11.3334 17.3333 11.3334ZM22.6667 3.33341H18.6667V2.00008C18.6667 1.64646 18.5262 1.30732 18.2761 1.05727C18.0261 0.807224 17.687 0.666748 17.3333 0.666748C16.9797 0.666748 16.6406 0.807224 16.3905 1.05727C16.1405 1.30732 16 1.64646 16 2.00008V3.33341H13.3333V2.00008C13.3333 1.64646 13.1929 1.30732 12.9428 1.05727C12.6928 0.807224 12.3536 0.666748 12 0.666748C11.6464 0.666748 11.3072 0.807224 11.0572 1.05727C10.8071 1.30732 10.6667 1.64646 10.6667 2.00008V3.33341H8V2.00008C8 1.64646 7.85952 1.30732 7.60948 1.05727C7.35943 0.807224 7.02029 0.666748 6.66667 0.666748C6.31305 0.666748 5.97391 0.807224 5.72386 1.05727C5.47381 1.30732 5.33333 1.64646 5.33333 2.00008V3.33341H1.33333C0.979711 3.33341 0.640573 3.47389 0.390524 3.72394C0.140476 3.97399 0 4.31313 0 4.66675V23.3334C0 24.3943 0.421427 25.4117 1.17157 26.1618C1.92172 26.912 2.93913 27.3334 4 27.3334H20C21.0609 27.3334 22.0783 26.912 22.8284 26.1618C23.5786 25.4117 24 24.3943 24 23.3334V4.66675C24 4.31313 23.8595 3.97399 23.6095 3.72394C23.3594 3.47389 23.0203 3.33341 22.6667 3.33341ZM21.3333 23.3334C21.3333 23.687 21.1929 24.0262 20.9428 24.2762C20.6928 24.5263 20.3536 24.6667 20 24.6667H4C3.64638 24.6667 3.30724 24.5263 3.05719 24.2762C2.80714 24.0262 2.66667 23.687 2.66667 23.3334V6.00008H5.33333V7.33342C5.33333 7.68704 5.47381 8.02618 5.72386 8.27622C5.97391 8.52627 6.31305 8.66675 6.66667 8.66675C7.02029 8.66675 7.35943 8.52627 7.60948 8.27622C7.85952 8.02618 8 7.68704 8 7.33342V6.00008H10.6667V7.33342C10.6667 7.68704 10.8071 8.02618 11.0572 8.27622C11.3072 8.52627 11.6464 8.66675 12 8.66675C12.3536 8.66675 12.6928 8.52627 12.9428 8.27622C13.1929 8.02618 13.3333 7.68704 13.3333 7.33342V6.00008H16V7.33342C16 7.68704 16.1405 8.02618 16.3905 8.27622C16.6406 8.52627 16.9797 8.66675 17.3333 8.66675C17.687 8.66675 18.0261 8.52627 18.2761 8.27622C18.5262 8.02618 18.6667 7.68704 18.6667 7.33342V6.00008H21.3333V23.3334Z" fill="white" />
                                    </svg>

                                </div>
                                <div className="worktitle">
                                    1. Research
                                </div>
                                <div className="workbody">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.
                                </div>
                            </Col>
                            <div style={{ width: "1.5rem" }} />
                            <Col className="workcontainer" style={{ marginTop: "1.5rem" }} >
                                <div className="workiconbg">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.33333 21.3334C9.86377 21.3334 10.3725 21.1227 10.7475 20.7476C11.1226 20.3726 11.3333 19.8638 11.3333 19.3334C11.3398 19.2669 11.3398 19.1999 11.3333 19.1334L15.0533 15.4134H15.36H15.6667L17.8133 17.5601C17.8133 17.5601 17.8133 17.6267 17.8133 17.6667C17.8133 18.1972 18.024 18.7059 18.3991 19.081C18.7742 19.456 19.2829 19.6667 19.8133 19.6667C20.3438 19.6667 20.8525 19.456 21.2275 19.081C21.6026 18.7059 21.8133 18.1972 21.8133 17.6667V17.5601L26.6667 12.6667C27.0622 12.6667 27.4489 12.5495 27.7778 12.3297C28.1067 12.1099 28.363 11.7976 28.5144 11.4321C28.6658 11.0667 28.7054 10.6645 28.6282 10.2766C28.5511 9.88861 28.3606 9.53224 28.0809 9.25253C27.8012 8.97283 27.4448 8.78235 27.0568 8.70518C26.6689 8.62801 26.2668 8.66761 25.9013 8.81899C25.5358 8.97036 25.2235 9.22671 25.0037 9.55561C24.784 9.88451 24.6667 10.2712 24.6667 10.6667C24.6602 10.7333 24.6602 10.8002 24.6667 10.8667L19.8533 15.6801H19.64L17.3333 13.3334C17.3333 12.803 17.1226 12.2943 16.7475 11.9192C16.3725 11.5441 15.8638 11.3334 15.3333 11.3334C14.8029 11.3334 14.2942 11.5441 13.9191 11.9192C13.544 12.2943 13.3333 12.803 13.3333 13.3334L9.33333 17.3334C8.8029 17.3334 8.29419 17.5441 7.91912 17.9192C7.54405 18.2943 7.33333 18.803 7.33333 19.3334C7.33333 19.8638 7.54405 20.3726 7.91912 20.7476C8.29419 21.1227 8.8029 21.3334 9.33333 21.3334V21.3334ZM27.3333 26.6667H4.66667V4.00008C4.66667 3.64646 4.52619 3.30732 4.27614 3.05727C4.02609 2.80722 3.68696 2.66675 3.33333 2.66675C2.97971 2.66675 2.64057 2.80722 2.39052 3.05727C2.14048 3.30732 2 3.64646 2 4.00008V28.0001C2 28.3537 2.14048 28.6928 2.39052 28.9429C2.64057 29.1929 2.97971 29.3334 3.33333 29.3334H27.3333C27.687 29.3334 28.0261 29.1929 28.2761 28.9429C28.5262 28.6928 28.6667 28.3537 28.6667 28.0001C28.6667 27.6465 28.5262 27.3073 28.2761 27.0573C28.0261 26.8072 27.687 26.6667 27.3333 26.6667Z" fill="#ffffff" />
                                    </svg>

                                </div>
                                <div className="worktitle">
                                    2. Analyze
                                </div>
                                <div className="workbody">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="workcontainer">
                                <div className="workiconbg">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M29.3333 9.65319C29.3343 9.47772 29.3007 9.30377 29.2343 9.14132C29.168 8.97887 29.0702 8.83111 28.9466 8.70653L23.2933 3.05319C23.1687 2.92962 23.021 2.83185 22.8585 2.7655C22.6961 2.69915 22.5221 2.66551 22.3466 2.66653C22.1712 2.66551 21.9972 2.69915 21.8348 2.7655C21.6723 2.83185 21.5246 2.92962 21.4 3.05319L17.6266 6.82653L3.05331 21.3999C2.92974 21.5244 2.83197 21.6722 2.76562 21.8346C2.69927 21.9971 2.66563 22.1711 2.66665 22.3465V27.9999C2.66665 28.3535 2.80712 28.6926 3.05717 28.9427C3.30722 29.1927 3.64636 29.3332 3.99998 29.3332H9.65331C9.83988 29.3433 10.0265 29.3142 10.2011 29.2475C10.3756 29.1809 10.5343 29.0784 10.6666 28.9465L25.16 14.3732L28.9466 10.6665C29.0683 10.5373 29.1675 10.3886 29.24 10.2265C29.2528 10.1202 29.2528 10.0128 29.24 9.90653C29.2462 9.84446 29.2462 9.78192 29.24 9.71986L29.3333 9.65319ZM9.10665 26.6665H5.33331V22.8932L18.5733 9.65319L22.3466 13.4265L9.10665 26.6665ZM24.2266 11.5465L20.4533 7.77319L22.3466 5.89319L26.1066 9.65319L24.2266 11.5465Z" fill="#ffffff" />
                                    </svg>
                                </div>
                                <div className="worktitle">
                                    2. Design
                                </div>
                                <div className="workbody">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.
                                </div>
                            </Col>
                            <div style={{ width: "1.5rem" }} />
                            <Col className="workcontainer" style={{ marginTop: "1.5rem" }} >
                                <div className="workiconbg">
                                    <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M26 13.6668H24.6666V4.3335C24.6666 3.27263 24.2452 2.25521 23.4951 1.50507C22.7449 0.754924 21.7275 0.333496 20.6666 0.333496H7.33329C6.27243 0.333496 5.25501 0.754924 4.50487 1.50507C3.75472 2.25521 3.33329 3.27263 3.33329 4.3335V13.6668H1.99996C1.64634 13.6668 1.3072 13.8073 1.05715 14.0574C0.807102 14.3074 0.666626 14.6465 0.666626 15.0002V17.6668C0.666626 18.7277 1.08805 19.7451 1.8382 20.4953C2.58834 21.2454 3.60576 21.6668 4.66663 21.6668H23.3333C24.3942 21.6668 25.4116 21.2454 26.1617 20.4953C26.9119 19.7451 27.3333 18.7277 27.3333 17.6668V15.0002C27.3333 14.6465 27.1928 14.3074 26.9428 14.0574C26.6927 13.8073 26.3536 13.6668 26 13.6668ZM5.99996 4.3335C5.99996 3.97987 6.14044 3.64074 6.39048 3.39069C6.64053 3.14064 6.97967 3.00016 7.33329 3.00016H20.6666C21.0202 3.00016 21.3594 3.14064 21.6094 3.39069C21.8595 3.64074 22 3.97987 22 4.3335V13.6668H5.99996V4.3335ZM24.6666 17.6668C24.6666 18.0205 24.5262 18.3596 24.2761 18.6096C24.0261 18.8597 23.6869 19.0002 23.3333 19.0002H4.66663C4.313 19.0002 3.97387 18.8597 3.72382 18.6096C3.47377 18.3596 3.33329 18.0205 3.33329 17.6668V16.3335H24.6666V17.6668Z" fill="#ffffff" />
                                    </svg>
                                </div>
                                <div className="worktitle">
                                    4. Launch
                                </div>
                                <div className="workbody">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}