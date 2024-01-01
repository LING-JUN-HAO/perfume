const Banner = () => {
    return (
        <section className='bannerContainer position-relative overflow-hidden'>
            <div className='text-white fw-normal bannerContent position-absolute top-50 translate-middle-y ms-3 ms-md-0'>
                <h1 className='h1 m-0 fw-bold'>Perfume your day</h1>
                <p className='fs-4'>A perfume is like a piece of clothing, a message, a way of presenting oneself a costume that according to the person who wears it.</p>
                <a className='btn text-white border border-2 border-white rounded-5 fs-3' href="#">Shop now</a>
            </div>
        </section>
    )
}

export default Banner