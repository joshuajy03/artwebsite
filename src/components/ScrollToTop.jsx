import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import IconButton from '@material-ui/core/IconButton';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import { makeStyles, useTheme } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  menuButton: {
    color: "#FAC9B8",
    marginRight: '16',
  },
  title: {
    flexGrow: 1,
  },
}));



export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const classes = styles()
  const theme = useTheme();

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      <IconButton className={classes.menuButton} onClick={scrollToTop} block>
        <ArrowUpwardIcon />
      </IconButton>
    </div>
  );
}