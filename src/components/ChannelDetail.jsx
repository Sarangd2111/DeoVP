import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setchannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet,statistics&id=${id}`).then((data) =>
      setchannelDetail(data?.items[0])
    );
    fetchFromAPI(`search?channelId=${id}&part=snippet,id&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(41,121,138,1) 50%, rgba(20,20,34,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{mr:{sm:"100px"}}}/>
          <Videos videos={videos}/>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
