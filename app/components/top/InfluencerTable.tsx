"use client"

import * as React from "react";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import DownloadIcon from "@mui/icons-material/Download";
import { Tooltip } from "@mui/material";
import Loader from "./Loader";
import Image from "next/image";

type Props = {
    filter: string;
  };

export default function InfluencerTable({ filter }: Props) {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  let country: any = "IN";

  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    country =
      params.get("country") ||
      JSON.parse(window.localStorage.getItem("FP_Language") || "")?.value ||
      "IN";
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const url = `https://vdtteq14bc.execute-api.ap-south-1.amazonaws.com/dev/?filter=${filter}&country=${country}`;
        const response = await fetch(url);
        const result = await response.json();
        const dataArray = JSON.parse(result);
        const finalDataArray = Array.isArray(dataArray) ? dataArray : [];
        setData(finalDataArray);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchData();
  }, [country, filter]);

  function formatNumberAbbreviated(num: any) {
    if (num >= 1e6) {
      return (num / 1e6).toFixed(1) + "M";
    } else if (num >= 1e3) {
      return (num / 1e3).toFixed(1) + "K";
    } else {
      return num;
    }
  }

  return loading ? (
    <Loader />
  ) : data.length === 0 ? (
    <div className="flex justify-center items-center">
      <Image
        alt="commimg-soon"
        src="https://img.freepik.com/free-vector/influencer-concept-illustration_114360-681.jpg"
        className="w-80"
        width={300}
        height={300}
      />
      <Image
        alt="commimg-soon"
        src="https://elegantsupport.com/images/coming_soon.gif"
        className="w-60"
        width={300}
        height={300}
      />
    </div>
  ) : (
    <TableContainer
      sx={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
      component={Paper}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="bg-rose-50">
            <TableCell
              align="center"
              sx={{ fontWeight: "bold", fontSize: "16px" }}
            >
              Influencer
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontWeight: "bold", fontSize: "16px" }}
            >
              Country
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontWeight: "bold", fontSize: "16px" }}
            >
              Followers
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontWeight: "bold", fontSize: "16px" }}
            >
              Views
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontWeight: "bold", fontSize: "16px" }}
            >
              Likes
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontWeight: "bold", fontSize: "16px" }}
            >
              Comments
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontWeight: "bold", fontSize: "16px" }}
            >
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((inf: any, i: number) => (
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              key={i}
            >
              <TableCell align="center">
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <Image
                        src={inf.influencer_profile_picture || "/noimg.gif"}
                        alt="influencer_profile_picture"
                        width={100}
                        height={100}
                        loading="lazy"
                      />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={inf.influencer_name}
                    secondary={inf.influencer_handle_name}
                  />
                </ListItem>
              </TableCell>
              <TableCell align="center">{inf.influencer_country}</TableCell>
              <TableCell align="center">
                {formatNumberAbbreviated(inf.follower_count)}
              </TableCell>
              <TableCell align="center">
                {formatNumberAbbreviated(inf.influencer_views)}
              </TableCell>
              <TableCell align="center">
                {formatNumberAbbreviated(inf.influencer_likes)}
              </TableCell>
              <TableCell align="center">
                {formatNumberAbbreviated(inf.influencer_comments)}
              </TableCell>
              <TableCell align="center">
                <Tooltip title="Download Report">
                  <a href={inf.report} target="_blank">
                    <DownloadIcon style={{ color: "blue" }} />
                  </a>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
