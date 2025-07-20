"use client";
import { useScrollContainer } from "react-indiana-drag-scroll";
import { useRouter } from "next/navigation";
import "./CardSetTypeGridA.scss";

export default function CardSetTypeGridE({
  title,
  data = [],
  circle = false,
  extraWide = false,
  call = () => {},
}) {
  const scrollContainer = useScrollContainer();
  const router = useRouter();

  const handleItemClick = (url) => () => {
    router.push(url);
    // Any required functions for specific page
    call();
  };

  return (
    <div className={`grid ${title === "null" && "extraPadding"}`}>
      {title !== "null" && <p className="title">{title}</p>}
      <div
        ref={scrollContainer.ref}
        className={`grid-set5 ${circle && "circle"} ${
          extraWide && "extraWide"
        }`}
      >
        {data.map((item, key) => (
          <div className="grid-card-wrapper" key={key}>
            <div
              key={key}
              className="grid-card"
              style={{
                backgroundImage: "url(" + item.squareImage + ")",
                borderRadius: circle ? "500px" : "7px",
              }}
              onClick={handleItemClick(`/game/${item.name.toLowerCase()}`)}
            >
              <div className="titleHolder">
                <div className="title">{item.name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
