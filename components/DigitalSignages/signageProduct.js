import React from "react";
import SignageFooter from "./signageFooter";
import SignageHeading from "./signageHeading";

const SignageProduct = ({ event }) => {
  const eventParams = event?.params
    ? { ...event.params }
    : {
        date_start: "",
        date_end: "",
        date_text: "",
        dates: "",
        repeating_day: "",
        skip_dates: "",
        time_text: "",
      };

  const dateTags = [];

  if (!eventParams.date_start && !eventParams.date_end) {
    if (eventParams.date_text) {
      dateTags.push(eventParams.date_text);
    }
  } else if (eventParams.date_start && eventParams.date_end) {
    dateTags.push(`${eventParams.date_start} to ${eventParams.date_end}`);
  }

  return (
    <div className="signage signage-horizontal signage-product">
      <SignageHeading className="signage-vertical-heading" />
      <div className="signage-product-image">
        <img
          src={event && event.image && event?.image["600x600"]}
          alt="Digital Signage Product"
        />
        {/* <Image
          src={images.full}
          alt="Digital Signage Product"
          layout="responsive"
          width={2160}
          height={3840}
        /> */}
      </div>
      <div className="signage-product-content-container">
        <SignageHeading className="signage-horizontal-heading" />
        <div className="signage-content signage-product-content">
          <div className="signage-product-content-header">
            <p className="title is-1">{event?.name || ""}</p>
            <div className="signage-product-content-header-date">
              {dateTags.map((tag, k) => (
                <p key={k} className="date-tag">
                  {tag}
                </p>
              ))}
              {event?.params?.time_text !== "00:00 - 00:00" && (
                <p className="time">
                  <span className="time-icon">
                    <img src="/images/time.svg" alt="Time icon" />
                  </span>{" "}
                  {event?.params.time_text}
                </p>
              )}
            </div>
          </div>
          <div
            className="caption"
            dangerouslySetInnerHTML={{ __html: event?.description || "" }}
          />
          {/* <p className="caption">
            Ipsum, sed a felis vitae fames aliquet molestie semper. Ac egestas
            duis lacus accumsan ac tellus. Lorem in dignissim et risus viverra
            dui tincidunt nulla. Sem ultrices turpis ullamcorper egestas etiam
            proin massa vestibulum. Tellus ullamcorper morbi aliquam luctus urna
            neque. Tempor eu purus molestie sed. A nullam amet quis dapibus
            ultricies.
          </p> */}
          <img
            className="signage-product-content-decor"
            src="/images/hero-upper-decor-rotated.png"
            alt="Decoration"
          />
        </div>
        <SignageFooter />
      </div>
    </div>
  );
};

export default SignageProduct;
