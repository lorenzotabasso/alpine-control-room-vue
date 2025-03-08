import { ContentType, WebcamProps } from "@/lib/data/definitions";

export default function Page({props}: Readonly<{props: WebcamProps}>) {
  return (
    <div className="webcam">
      {getThumbnail(props)}
      <div>
        <h4>{props.resort}</h4>
        <h4>
          {props.altitude ? props.label + ", " + props.altitude : props.label}
        </h4>
        <p>
          {mapNationToFlag(props.nation) +
            " " +
            props.region +
            ", " +
            (props.subRegion ? " - " + props.subRegion : "")}
        </p>
      </div>
      <div className="webcam-buttons">
        {props.source && (
          <button
            onClick={() => {
              openNewTabWithSelectedWebcam(props.source);
            }}
          >
            Source
          </button>
        )}
        {props.link && (
          <button
            onClick={() => {
              openNewTabWithSelectedWebcam(props.link);
            }}
          >
            Open
          </button>
        )}
      </div>
    </div>
  );
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
      : (<Image
      src="/broken-image.svg"
      alt="Thumbnail not available"
      width={24}
      height={24}
    />);
  }
  return <img src={thumbnailLink} alt={source.resort + " - " + source.label} />;
}
