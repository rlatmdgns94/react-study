import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Button } from "antd";
function Favorite(props) {
  const movieId = props.movieId;
  const userFrom = props.userFrom;
  const movieTitle = props.movieInfo.title;
  const moviePost = props.movieInfo.backdrop_path;
  const movieRunTime = props.movieInfo.runtime;

  const [FavoriteNumber, setFavoriteNumber] = useState(0);
  const [Favorited, setFavorited] = useState(false);
  let variables = {
    userFrom: userFrom,
    movieId: movieId,
    movieTitle: movieTitle,
    movieRunTime: movieRunTime,
  };

  useEffect(() => {
    Axios.post("/api/favorite/favoriteNumber", variables).then((response) => {
      if (response.data.success) {
        console.log("favoriteNumber", response.data);
        setFavoriteNumber(response.data.favoriteNumber);
      } else {
        alert("숫자정보를 가져오는데 실패했습니다.");
      }
    });

    Axios.post("/api/favorite/favorited", variables).then((response) => {
      if (response.data.success) {
        console.log("favorite", response.data);
        setFavoriteNumber(response.data.favorited);
      } else {
        alert("정보를 가져오는데 실패 했습니다.");
      }
    });
  }, []);

  const onClickFavorite = () => {
    if (Favorited) {
      Axios.post("/api/favorite/removeFromFavorite", variables).then(
        (response) => {
          if (response.data.success) {
            setFavoriteNumber(FavoriteNumber - 1);
            setFavorited(!Favorited);
          } else {
            alert("Favorite 리스트에서 지우는 걸 실패했습니다.");
          }
        }
      );
    } else {
      Axios.post("/api/favorite/addToFavorite", variables).then((response) => {
        if (response.data.success) {
          setFavoriteNumber(FavoriteNumber + 1);
          setFavorited(!Favorited);
        } else {
          alert("Favorite 리스트에서 추가 걸 실패했습니다.");
        }
      });
    }
  };

  return (
    <div>
      <Button onClick={onClickFavorite}>
        {Favorited ? "Not Favorite" : "Add  to Fovorite"}
        {FavoriteNumber}
      </Button>
    </div>
  );
}

export default Favorite;
