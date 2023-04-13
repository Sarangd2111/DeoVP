import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle, Scale } from "@mui/icons-material";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        width: { md: "356px"},
        boxShadow: "none",
        borderRadius: 5,
        transition: "0.5s",
        border:"solid red 1px",
        borderColor: "#fff",
        "&:hover": {
          transform: "scale(1.06) ",
          transition: "0.5s",
          border:"solid red 1px",
          borderColor: "#F31503",
        },
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: 358, height: 200 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {snippet?.channelTitle.slice(0, 60) ||
              demoChannelTitle.slice(0, 60)}
            <CheckCircle sx={{ fontSize: 12, color: "blue", ml: "5px" }} />
          </Typography>
        </Link>
        <Typography variant="subtitle2" fontWeight="bold" color="#fff">
          {snippet?.title.slice(0, 60)}
        </Typography>
        <Typography variant="subtitle2" fontWeight="bold" color="gray">
          {snippet?.publishTime}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
