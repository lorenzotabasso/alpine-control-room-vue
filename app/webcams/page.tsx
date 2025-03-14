import { ContentType, WebcamProps } from "@/lib/data/definitions";
import { webcams } from "@/lib/data/webcams";
import Image from 'next/image';
import style from '../page.module.css';

export default function Webcams() {
  return webcams.map((webcam, index) => { 
    const key = webcam.resort.trim().toLowerCase() + "-" + index;
    return (
      <div key={key} className="webcam">
        {getThumbnail(webcam)}
        <div>
          <h4>{webcam.resort}</h4>
          <h4>
            {webcam.altitude ? webcam.label + ", " + webcam.altitude : webcam.label}
          </h4>
          <p>
            {mapNationToFlag(webcam.nation) +
              " " +
              webcam.region +
              ", " +
              (webcam.subRegion ? " - " + webcam.subRegion : "")}
          </p>
        </div>
        <div className="webcam-buttons">
          {webcam.source && (
            <button
              
            >
              Source
            </button>
          )}
          {webcam.link && (
            <button
              
            >
              Open
            </button>
          )}
        </div>
      </div>
    );
  });
}

function mapNationToFlag(nation: string): string {
  if (nation.trim().toLowerCase() === "ita") {
    return "🇮🇹";
  } else {
    return "🇫🇷";
  }
}

function openNewTabWithSelectedWebcam(url: string | undefined): void {
  if (url) {
    window.open(url);
  }
}

function getThumbnail(source: WebcamProps) {
  let thumbnailLink = "";
  if (source.contentType === ContentType.IMG) {
    thumbnailLink = source.link;
  } else {
    thumbnailLink = source.thumbnailLink
      ? source.thumbnailLink
      : "";
  }
  
  let elementToReturn;
  if(thumbnailLink === "") {
    elementToReturn = <Image src={"/broken-image.svg"} alt={"Thumbnail not available"} width={24} height={24} />;
  } else {
    elementToReturn = <img className={style.webcamthumbnail} src={thumbnailLink} alt={source.resort + " - " + source.label} />;
  }

  return elementToReturn;
}