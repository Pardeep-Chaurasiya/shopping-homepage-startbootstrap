import React from 'react'

const Card = (props) => {

  const printStar = (count) =>{
    let starList = [];

    for(let i=0;i<count;i++){
      starList.push(<div className='bi-star-fill'></div>)
    }
    return starList;
  }

  return (
    <>
       <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {props.data.map((ele,i)=>{
    
                      return <div class="col mb-5">
                        <div class="card h-100">
                            {/* <!-- Sale badge--> */}
                            <div class="badge bg-dark text-white position-absolute" >{ele.sale}</div>
                            {/* <!-- Product image--> */}
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div class="card-body p-4">
                                <div class="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 class="fw-bolder">{ele.itemType}</h5>
                                    {/* <!-- Product reviews--> */}
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        {printStar(ele.starCount)}
                                    </div>
                                    {/* <!-- Product price--> */}
                                    <span class="text-muted text-decoration-line-through">{ele.price.oldPrice}</span>
                                    {ele.price.newPrice}
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><button class="btn btn-outline-dark mt-auto" href="/" onClick={props.manageItem}>{ele.buttonName}</button></div>
                            </div>
                        </div>
                    </div>
                    })}
                    

                </div>
            </div>
        </section>
    </>
  )
}

export default Card