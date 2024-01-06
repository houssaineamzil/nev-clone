"use client";

import cn from "classnames";
import { motion } from "framer-motion";
import mapboxgl from "mapbox-gl";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

export const Map = () => {
  const { theme } = useTheme();
  const [mouseEntered, setMouseEntered] = useState(false);
  const [map, setMap] = useState<mapboxgl.Map | any>();
  const [zoom, setZoom] = useState(12);
  const mapRef = useRef<any>();

  const handleZoom = (type: "in" | "out") => {
    return "in" === type
      ? (map.flyTo({
          zoom: zoom + 4,
        }),
        setZoom((prev) => {
          return prev + 4;
        }))
      : "out" === type
        ? (map.flyTo({
            zoom: zoom - 4,
          }),
          setZoom((prev) => {
            return prev - 4;
          }))
        : void 0;
  };

  const mapStyle =
    theme == "dark" ? "ckmtfwtc528ra17k72f5v8pzy" : "ckmq30o0a0pzx17qoi8dxp3ou";

  useEffect(() => {
    setTimeout(() => {
      mapboxgl.accessToken =
        "pk.eyJ1IjoibmV2Zmx5bm4iLCJhIjoiY2ttcTJlbHptMms0cjJ2cW9uaGxxNjI0NSJ9.RJAjJtHGrGB43W_XaylAnA";

      setMap(
        new mapboxgl.Map({
          container: mapRef.current as HTMLDivElement,
          style: `mapbox://styles/nevflynn/${mapStyle}?optimize=true`,
          center: [-6.9396635, 33.9693338],
          zoom: zoom,
          dragPan: false,
          scrollZoom: false,
          dragRotate: false,
          boxZoom: false,
          doubleClickZoom: false,
          attributionControl: false,
        }),
      );
    }, 750);
  }, []);

  return (
    <div
      className={cn(styles.container)}
      onMouseEnter={() => {
        return setMouseEntered(true);
      }}
      onMouseLeave={() => {
        return setMouseEntered(false);
      }}
    >
      <div
        className={cn(styles.static)}
        style={{
          backgroundImage: `url("https://api.mapbox.com/styles/v1/nevflynn/${mapStyle}/static/-6.845059,33.990777,${zoom}/280x280?access_token=pk.eyJ1IjoibmV2Zmx5bm4iLCJhIjoiY2ttcTJlbHptMms0cjJ2cW9uaGxxNjI0NSJ9.RJAjJtHGrGB43W_XaylAnA&attribution=false&logo=false")`,
        }}
      />
      <div ref={mapRef} className={cn(styles.mapContainer)}></div>
      <motion.div
        className={cn(styles.marker)}
        animate={{
          scale: mouseEntered ? 1.1 : 1,
        }}
        transition={{
          ease: [0.85, 0, 0.3, 1],
          duration: 0.5,
        }}
      >
        <motion.div
          className={cn(styles.memojiWrapper)}
          animate={{
            scale: mouseEntered ? [1, 1.2, 1, 1.2, 1] : 1,
            rotate: mouseEntered ? [0, 15, 0, -15, 0] : 1,
          }}
          transition={{
            repeat: mouseEntered ? 1 / 0 : 0,
            duration: mouseEntered ? 1.6 : 0.5,
          }}
        >
          <Image
            alt=""
            className={cn(styles.memoji)}
            width={32}
            height={44}
            src="/images/memoji-1.png"
          />
        </motion.div>
      </motion.div>
      {zoom > 4 && (
        <motion.div
          key="out"
          className={cn(styles.zoomButton)}
          style={{
            left: 14,
          }}
          onClick={() => {
            return handleZoom("out");
          }}
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 0,
          }}
          transition={{
            duration: 0.25,
            delay: 1,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M0,0H24V24H0Z" fill="none"></path>
            <path
              d="M16,12H8"
              fill="none"
              stroke="var(--icon)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            ></path>
          </svg>
        </motion.div>
      )}
      {zoom < 12 && (
        <motion.div
          key="in"
          className={cn(styles.zoomButton)}
          style={{
            right: 14,
          }}
          onClick={() => {
            return handleZoom("in");
          }}
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 0,
          }}
          transition={{
            duration: 0.25,
            delay: 1,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M0,0H24V24H0Z" fill="none"></path>
            <path
              d="M12,8v8"
              fill="none"
              stroke="var(--icon)"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            ></path>
            <path
              d="M16,12H8"
              fill="none"
              stroke="var(--icon)"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            ></path>
          </svg>
        </motion.div>
      )}
    </div>
  );
};
