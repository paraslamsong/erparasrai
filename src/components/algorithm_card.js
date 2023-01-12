import { Image } from "react-bootstrap";

export default function AlgorithmCard({ className, algorithm }) {
    const tag = (tag) => <span className="portfoliotagbox">{tag}</span>;
    return (
        <div className="p-2">
            <div className={`portfoliocard ${className}`}>
                {/* <section className="portfolioimg">
                    {algorithm.images.map((source) => )[0]}
                </section> */}
                <Image
                    src={algorithm.image}
                    fluid
                    height={"100%"}
                    width={"100%"}
                    style={{
                        objectFit: "cover",
                        borderRadius: "0.5rem",
                    }}
                    alt={algorithm.name}
                />
                <section className="portfoliodetail">
                    <div className="portfoliotag  flex-wrap d-flex">
                        {
                            algorithm.tags.map((t) => tag(t))
                        }
                    </div>
                    <div className="portfoliotitle">
                        {algorithm.name}
                    </div>
                    <div className="portfoliodescription">
                        {algorithm.description}
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <a className="portfoliobtn" href={`/algorithm/${algorithm.slug}/detail`} aria-label={`Click to open ${algorithm.name}`}>
                            More <svg width="12" height="14" viewBox="0 0 12 14" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.92 6.62019C11.8724 6.49743 11.801 6.38529 11.71 6.29019L6.71 1.29019C6.61676 1.19695 6.50607 1.12299 6.38425 1.07253C6.26243 1.02207 6.13186 0.996094 6 0.996094C5.7337 0.996094 5.4783 1.10188 5.29 1.29019C5.19676 1.38342 5.1228 1.49411 5.07234 1.61594C5.02188 1.73776 4.99591 1.86833 4.99591 2.00019C4.99591 2.26649 5.1017 2.52188 5.29 2.71019L8.59 6.00019H1C0.734784 6.00019 0.48043 6.10554 0.292893 6.29308C0.105357 6.48062 0 6.73497 0 7.00019C0 7.2654 0.105357 7.51976 0.292893 7.70729C0.48043 7.89483 0.734784 8.00019 1 8.00019H8.59L5.29 11.2902C5.19627 11.3831 5.12188 11.4937 5.07111 11.6156C5.02034 11.7375 4.9942 11.8682 4.9942 12.0002C4.9942 12.1322 5.02034 12.2629 5.07111 12.3848C5.12188 12.5066 5.19627 12.6172 5.29 12.7102C5.38296 12.8039 5.49356 12.8783 5.61542 12.9291C5.73728 12.9798 5.86799 13.006 6 13.006C6.13201 13.006 6.26272 12.9798 6.38458 12.9291C6.50644 12.8783 6.61704 12.8039 6.71 12.7102L11.71 7.71019C11.801 7.61508 11.8724 7.50294 11.92 7.38019C12.02 7.13672 12.02 6.86365 11.92 6.62019Z" fill="#000000" />
                            </svg>
                        </a>
                        <span class="screen-reader-text">{algorithm.name}</span>
                    </div>

                </section>
            </div>
        </div >
    )
}