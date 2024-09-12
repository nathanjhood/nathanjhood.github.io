const reportWebVitals = (onPerfEntry?: any) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(({ onCLS, onINP, onLCP, onFCP, onTTFB }) => {
      onCLS(console.log);
      onINP(console.log);
      onLCP(console.log);
      onFCP(console.log);
      onTTFB(console.log);
    })
  }
}

export default reportWebVitals;

// import { ReportHandler } from "web-vitals";

// const reportWebVitals = (onPerfEntry?: Function) => {
//   if (onPerfEntry && onPerfEntry instanceof Function) {
//     import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
//       getCLS(onPerfEntry);
//       getFID(onPerfEntry);
//       getFCP(onPerfEntry);
//       getLCP(onPerfEntry);
//       getTTFB(onPerfEntry);
//     });
//   }
// };

// export default reportWebVitals;
