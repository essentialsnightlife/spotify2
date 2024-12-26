const SoundCloudPlayer = ({ trackUrl, color = '#ff5500', visual = true }) => {
    const embedUrl = `https://w.soundcloud.com/player/?url=${encodeURIComponent(
        trackUrl
    )}&color=${color}&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=${visual}`;

    return (
        <iframe
            width="100%"
            height="300"
            allow="autoplay"
            src={embedUrl}
        ></iframe>
    );
};

export default SoundCloudPlayer;
