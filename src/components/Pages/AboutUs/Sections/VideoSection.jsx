import React from 'react'

const VideoSection = () => {
    return (
        <div className="flex flex-col gap-16">
            <div className="flex justify-center items-center">
                <iframe
                    className="w-full max-h-[80vh] aspect-video"
                    src="https://www.youtube.com/embed/QF-2wfgFqU4"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="flex sm:flex-col lg:flex-row gap-10">
                <div>
                    <h3 className="text-3xl font-playfair font-medium">Our Vision</h3>
                    <p className="text-base font-normal">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure totam quae dolores? Vel dicta placeat eius odit. Illum error laborum odit eaque ex autem ut iure sunt, architecto vero cumque voluptates beatae, nam omnis quasi! Ipsa aut quidem ratione cumque perferendis quaerat, et obcaecati vel? Deleniti laudantium libero cum assumenda unde dicta excepturi vero commodi, architecto dolores dignissimos iste quos eos omnis voluptatum natus earum sed. Consequatur eaque necessitatibus</p>
                </div>
                <div>
                    <h3 className="text-3xl font-playfair font-medium">Our Mission</h3>
                    <p className="text-base font-normal">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure totam quae dolores? Vel dicta placeat eius odit. Illum error laborum odit eaque ex autem ut iure sunt, architecto vero cumque voluptates beatae, nam omnis quasi! Ipsa aut quidem ratione cumque perferendis quaerat, et obcaecati vel? Deleniti laudantium libero cum assumenda unde dicta excepturi vero commodi, architecto dolores dignissimos iste quos eos omnis voluptatum natus earum sed. Consequatur eaque necessitatibus  </p>
                </div>
            </div>
        </div>
    )
}

export default VideoSection
