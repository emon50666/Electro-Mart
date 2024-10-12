import PropType from "prop-types"

const ServiceHour = ({ store }) => {
    return (
        <div className="p-5 bg-white rounded-lg h-full">
            <h3 className="text-2xl font-semibold mb-5 font_cabin">Hours</h3>
            {store?.operatingHours.map((hour, idx) => <div key={idx} className="flex justify-between my-3 font_lexend xl:text-base">
                <p className={`${hour.isClosed == true ? "text-orange-600" : "text-gray-600"}`}>{hour.day}</p>
                {
                    hour.isClosed == true ? <p className={`${hour.isClosed == true ? "text-orange-600" : "text-gray-600"}`}>Close</p> : <div className="flex items-center">
                        <p className={`${hour.isClosed == true ? "text-orange-600" : "text-gray-600"}`}>{hour.openingHour}</p>
                        <span>{" "}-{" "}</span>
                        <p className={`${hour.isClosed == true ? "text-orange-600" : "text-gray-600"}`}>{hour.closingHour}</p>
                    </div>
                }

            </div>
            )}
        </div>
    );
};
ServiceHour.propTypes = {
    store: PropType.object,
}
export default ServiceHour;