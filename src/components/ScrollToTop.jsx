import React, { useEffect, useState } from "react";
import Button from '@material-ui/core/Button';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { makeStyles, useTheme } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  menuButton: {
    color: "#FAC9B8",
    backgroundColor : "#22223B",
    marginRight: '16',
    fontSize: "smaller",
    flexDirection: "column",
    
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
      <Button className={classes.menuButton} onClick={scrollToTop} block>
        <ArrowUpwardIcon />
        Top
      </Button>
    </div>
  );
}