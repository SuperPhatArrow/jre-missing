import styles from "./AmountMissing.module.css";
import getClientLocalTime from "../lib/getClientLocalTime";
import { ReactComponent as Checkmark } from "../icons/AmountMissingIcon.svg";

const AmountMissing = ({ data, shakeEpisodes, episodesShown, setSearchText }) => {
    const now = Date.now();
    const lastChecked = data?.lastChecked?.miliseconds;
    const lastCheckedMinutes = lastChecked
        ? Math.floor((new Date(now) - new Date(lastChecked)) / 60000)
        : 0;

    const lastCheckedDate = getClientLocalTime(lastChecked, "PP HH:mm");
    const lastCheckedString =
        lastCheckedMinutes === 0
            ? "less than a minute ago"
            : `${lastCheckedMinutes} minute${lastCheckedMinutes != 1 ? "s" : ""} ago`;

    const dateTime = getClientLocalTime(lastChecked, "yyyy-MM-dd HH:mm:ss.sss");
    return (
        <>
            <p className={styles.AmountMissing}>
                <span
                    onClick={() => {
                        if (episodesShown.length === data.missingEpisodes.length) {
                            shakeEpisodes();
                        } else {
                            setSearchText("");
                        }
                    }}
                >
                    {data.missingEpisodes.length}
                </span>{" "}
                episodes are missing from Spotify.
            </p>
            <div className={styles.LastChecked}>
                <p>
                    Last checked: {lastCheckedString}{" "}
                    <time dateTime={dateTime}> ({lastCheckedDate})</time>
                </p>
                <Checkmark className={styles.Checkmark} />
            </div>
        </>
    );
};

export default AmountMissing;
