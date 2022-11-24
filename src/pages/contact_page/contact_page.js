import { Col, Container, Row } from "react-bootstrap";

export default function ContactPage() {
    return (<Container>
        <Row className="m-5 ">
            <Col md={6} sm={12}>
                <div className="contacttitle">
                    Message Me:
                </div>
                <ContactBox title={'Address:'} value={'New Mexico 31134'} onClick={() => { }} >
                    <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 3.4804C13.4087 1.8891 11.2504 0.995117 8.99999 0.995117C6.74955 0.995117 4.59129 1.8891 2.99999 3.4804C1.40869 5.0717 0.514709 7.22996 0.514709 9.4804C0.514709 11.7308 1.40869 13.8891 2.99999 15.4804L8.26999 20.7604C8.36295 20.8541 8.47356 20.9285 8.59541 20.9793C8.71727 21.0301 8.84798 21.0562 8.97999 21.0562C9.112 21.0562 9.24271 21.0301 9.36457 20.9793C9.48643 20.9285 9.59703 20.8541 9.68999 20.7604L15 15.4304C16.5846 13.8457 17.4749 11.6965 17.4749 9.4554C17.4749 7.21434 16.5846 5.06508 15 3.4804ZM13.57 14.0004L8.99999 18.5904L4.42999 14.0004C3.52713 13.0967 2.91247 11.9456 2.66369 10.6927C2.4149 9.43973 2.54318 8.14115 3.03229 6.96108C3.52141 5.78101 4.34941 4.77245 5.41162 4.06288C6.47383 3.3533 7.72258 2.97458 8.99999 2.97458C10.2774 2.97458 11.5261 3.3533 12.5884 4.06288C13.6506 4.77245 14.4786 5.78101 14.9677 6.96108C15.4568 8.14115 15.5851 9.43973 15.3363 10.6927C15.0875 11.9456 14.4728 13.0967 13.57 14.0004ZM5.99999 6.4104C5.19271 7.22017 4.73939 8.31697 4.73939 9.4604C4.73939 10.6038 5.19271 11.7006 5.99999 12.5104C6.59975 13.1112 7.36358 13.5215 8.19564 13.6898C9.0277 13.8581 9.89094 13.777 10.6771 13.4566C11.4632 13.1361 12.1372 12.5907 12.6145 11.8886C13.0918 11.1866 13.3511 10.3593 13.36 9.5104C13.3645 8.9436 13.2553 8.38166 13.0389 7.85779C12.8225 7.33392 12.5032 6.85875 12.1 6.4604C11.7037 6.05498 11.2311 5.73194 10.7094 5.50986C10.1878 5.28779 9.62733 5.17107 9.06039 5.16643C8.49345 5.16178 7.93119 5.2693 7.40596 5.48279C6.88073 5.69628 6.40291 6.01153 5.99999 6.4104ZM10.69 11.0904C10.311 11.4751 9.8102 11.7163 9.27312 11.7727C8.73603 11.829 8.19605 11.697 7.7455 11.3993C7.29494 11.1016 6.96179 10.6566 6.803 10.1405C6.64421 9.62432 6.66964 9.06904 6.87495 8.56955C7.08026 8.07007 7.45269 7.65741 7.92858 7.40213C8.40446 7.14686 8.95424 7.06481 9.48393 7.17002C10.0136 7.27522 10.4903 7.56116 10.8325 7.97893C11.1747 8.3967 11.3612 8.92037 11.36 9.4604C11.3454 10.0777 11.0865 10.6639 10.64 11.0904H10.69Z" fill="white" />
                    </svg>
                </ContactBox>
                <ContactBox title={'Email:'} value={'erparasrai@gmail.com'} onClick={() => {
                    window.open("https://mail.google.com/mail/u/0/?view=cm&fs=1&to=erparasrai@gmail.com")
                }}  >
                    <img height={22} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAABgklEQVRIie3VsWpUURDG8e8umsJCiEKELARECIQQWBB8AhsfwCdQYiuWdnbrI9iFCGKjlQEbO61sRBAkBEXchIAKQiQhhf5S7Fm8LtndsG4gRf5wOMPM3PmGuefek5xy4sEUHmLL5NlEG1MpxnHTrtBJ0jzmwXUqSLKe5GeSaxMWeFf2VqMY80nOJFlO8n4CAh+T3Euyn6SVJOmb5XfcwE18HuNddLCM69iuBxp9nVxMspbkapKFJHfTHekofiV5UCYzneRlkkv/ZAzp7gWmcUH3ZO4ekrOPR5jBeTwbVGyYEGxgsTQ0hxX8LmsFcyW2WHIHMkroQ+n2LKpSdAlLxa5KbKbkjiW0jllcxhu8xkJt5FfwCm8xP0pskNAGmriFnZp/D/fL2qv5d0pu04ARHib0BS08GdTdEJ6XZz+NEvqK22Ufl23c0fcd1oV+4Knuifpf/mAN33qOCptJZpPsJjl31H/MEenV3GokeVyckxap11ztXXxt3Utq0vy9+E458RwARXy09pFxniYAAAAASUVORK5CYII="></img>
                </ContactBox>
                <ContactBox title={'Phone:'} value={'+977 9814373666'} onClick={() => { }} >
                    <img height={24} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABh0lEQVRoge2aP0oDQRSHZxKDiILY+AdsbLyBQcFb2JlYi63XUHMCT5FSxGZjYaO9wQvEwmhhkeaz8IUskk12ZyfLQ94HSxiY/b35dibNvnXOMHQBLAOXwDPwTTgj4A3oANtVS+wALyUWn8U7cFSVRAN4ksIfwBmwWiJvBTgGkpTMVsw1ZxU+l4KfwH7E3HpK5iZW7qyCj1LsYgHZB5Ldj509rdiXFNuQ8UOE/0YiWQ0Zj4quyweI4Jxz3nufHpflb954nJelGIsIKTwm1oOoxQjRgIlow0S0YSLaMBFtmIg2TEQbJqINE9GGiWjDRLRhItowEW2YiDb+jUi0l9ixXkaHEmNHehEykggZxQCG0oxZzzG3BrTlmtt2KNPoKQzQk2KtHHPbqa5UnvlNmftadF0hR+tWfq+AvYD7pwLUnXMdGXZj5c4qWAPu5MkN+f1oYDdjrgdawGnW0ZLj1Ezt9ADYXKzFpPga0C3e85zLADisRCIl44ET4J5JpzeEEdAHrqlqJwwjPz+YU7ph0rhU/gAAAABJRU5ErkJggg==" />
                </ContactBox>
            </Col>

            <Col md={6} sm={12}>
                <section style={{ maxWidth: 320 }}>

                    <div className="contactmessage my-4">
                        You can leave your message here! I will reach back to you!
                    </div>
                    <input className="contactinput" placeholder="Name" type="text" />
                    <input className="contactinput" placeholder="Email" type="email" />
                    <input className="contactinput" placeholder="Subject" type="text" />
                    <textarea className="contactinput" placeholder="Message" type="text" rows={4} >
                    </textarea>
                    <div style={{ height: 40 }} />
                    <span className="portfoliobtn">
                        Submit <svg width="16" height="16" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.34 7.32013L4.34 0.320128C3.78749 0.0451374 3.16362 -0.0527612 2.55344 0.03978C1.94326 0.132321 1.37646 0.410798 0.930335 0.837244C0.484207 1.26369 0.180456 1.81735 0.060496 2.42274C-0.059464 3.02813 0.0102046 3.65578 0.260003 4.22013L2.66 9.59013C2.71446 9.71996 2.74251 9.85934 2.74251 10.0001C2.74251 10.1409 2.71446 10.2803 2.66 10.4101L0.260003 15.7801C0.0567034 16.2368 -0.029241 16.7371 0.00998036 17.2355C0.0492018 17.7339 0.212345 18.2145 0.484585 18.6338C0.756825 19.0531 1.12953 19.3977 1.56883 19.6363C2.00812 19.875 2.50009 20 3 20.0001C3.46823 19.9955 3.92949 19.8861 4.35 19.6801L18.35 12.6801C18.8466 12.4303 19.264 12.0474 19.5557 11.5742C19.8474 11.101 20.0018 10.556 20.0018 10.0001C20.0018 9.44424 19.8474 8.89928 19.5557 8.42605C19.264 7.95282 18.8466 7.56994 18.35 7.32013H18.34ZM17.45 10.8901L3.45 17.8901C3.26617 17.9784 3.05973 18.0084 2.85839 17.976C2.65705 17.9436 2.47041 17.8504 2.32352 17.709C2.17662 17.5675 2.07648 17.3845 2.03653 17.1846C1.99658 16.9846 2.01873 16.7772 2.1 16.5901L4.49 11.2201C4.52094 11.1484 4.54766 11.075 4.57 11.0001H11.46C11.7252 11.0001 11.9796 10.8948 12.1671 10.7072C12.3546 10.5197 12.46 10.2653 12.46 10.0001C12.46 9.73491 12.3546 9.48056 12.1671 9.29302C11.9796 9.10549 11.7252 9.00013 11.46 9.00013H4.57C4.54766 8.9253 4.52094 8.85184 4.49 8.78013L2.1 3.41013C2.01873 3.22309 1.99658 3.01568 2.03653 2.8157C2.07648 2.61572 2.17662 2.43273 2.32352 2.29128C2.47041 2.14982 2.65705 2.05666 2.85839 2.02428C3.05973 1.9919 3.26617 2.02186 3.45 2.11013L17.45 9.11013C17.6138 9.19405 17.7513 9.32154 17.8473 9.47857C17.9433 9.63561 17.994 9.81608 17.994 10.0001C17.994 10.1842 17.9433 10.3647 17.8473 10.5217C17.7513 10.6787 17.6138 10.8062 17.45 10.8901Z" fill="#303030" />
                        </svg>

                    </span>
                </section>
            </Col>
        </Row>
    </Container>)
}

function ContactBox({ children, title, value, onClick }) {
    return (<div className="d-flex my-4 py-2" style={{ cursor: 'pointer' }} onClick={onClick}>
        <span className="contactbox d-flex align-items-center justify-content-center">{children}</span>
        <span className="mx-3">
            <div className="contactboxtitle">{title}</div>
            <div className="contactboxvalue">{value}</div>
        </span>
    </div>);
}