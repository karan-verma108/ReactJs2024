import React from "react";

const BootstrapPage = () => {
    return (
        <>
            <h1 className="text-info text-center my-5">Welcome to my travelling page</h1>
            <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '60px', flexWrap: 'wrap' }}>
                <div class="card" style={{ width: "18rem" }}>
                    <img src="https://picsum.photos/200" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>
                    <img src="https://picsum.photos/201" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>
                    <img src="https://picsum.photos/202" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BootstrapPage;