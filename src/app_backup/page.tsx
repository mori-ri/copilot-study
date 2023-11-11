"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import SelectComponent from "./SelectComponent";

export default function Home() {
  return (
    <main className={styles.main}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h3" component="div" gutterBottom>
          Welcome to Next.js!
        </Typography>
        <SelectComponent />
      </Box>
    </main>
  );
}
