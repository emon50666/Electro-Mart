const Map = () => {
    return (
        <div className="rounded-2xl px-2 mx-auto h-auto xl:h-full">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d193770.2816154169!2d-74.20528155573243!3d40.63736520687854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s123%20Main%20St%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sbd!4v1727703543940!5m2!1sen!2sbd"
                className="w-full h-[450px] outline-none border-none rounded-xl"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default Map;
