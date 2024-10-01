import PropType from "prop-types"

const ServiceHour = ({ store }) => {
    return (
        <div className="p-5 bg-white rounded-lg h-full">
            <h3 className="text-2xl font-semibold mb-5 font_cabin">Hours</h3>
            {store?.workHours.map((hour, idx) => <div key={idx} className="flex justify-between my-3 font_lexend xl:text-base">
                <p className={`${hour.day == "Sunday" ? "text-orange-600" : "text-gray-600"}`}>{hour.day}</p>
                <p className={`${hour.hours == "Closed" ? "text-orange-600" : "text-gray-600"}`}>{hour.hours}</p>
            </div>
            )}
        </div>
    );
};
ServiceHour.propTypes = {
    store: PropType.object,
}
export default ServiceHour;