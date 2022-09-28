import homePic from '../images/exhome.jpg'

function SmallCard() {
    return(
        <>
            <div className="card" style={{width: "100%"}}>
            <img src={homePic} className="card-img-top" alt="home card" />
            <div className="card-body">
                <h5 className="card-title text-start">฿ 3,200,000</h5>
                
                <p className='card-text float-start'>
                    <span>
                        3 <i className="fa-solid fa-bed float me-2" />
                        3 <i className="fa-solid fa-bath float" />
                    </span>
                </p>

                <p className='card-text float-start'>
                    <span className='font-detail'>ขาย</span>
                    <span className='font-detail'>บ้านเดี่ยว</span>
                    <span className='font-detail'> 3นอน</span>
                    <span className='font-detail'> 3น้ำ</span>
                    <span className='font-detail'> 2ที่จอดรถ</span>
                </p>
                
            </div>
            </div>
        </>
    )
}

export default SmallCard;