import { useEffect, useState } from "react";
import "./scroll.css";

export default function ScroolIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [scrollPercent, setScrollPercent] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();
      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setErrMsg(e.message);
      setLoading(false);
    }
  }

  function handleScrollPercent() {
    const currScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollPercent((currScroll / height) * 100);
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercent);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  if (errMsg) {
    return <div>Error Occurred {errMsg}</div>;
  }

  if (loading) {
    return <div>Loading Data!</div>;
  }

  return (
    <div>
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress">
          <div
            className="curr-progress"
            style={{ width: `${scrollPercent}%` }}
          ></div>
        </div>
      </div>

      <div className="data-container">
        {data && data.length > 0
          ? data.map((dataItem) => <p>{dataItem.title}</p>)
          : null}
      </div>
    </div>
  );
}
