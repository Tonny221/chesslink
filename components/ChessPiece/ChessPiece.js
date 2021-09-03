import React, { useEffect, useState } from "react";
import Image from "next/image";

const getImageByColorAndType = async (type, color) => {
  const imgName = `${color.toLowerCase()}-${type.toLowerCase()}`;
  const img = await import(`@assets/images/chess-pieces/${imgName}.svg`);
  return img;
};

const ChessPiece = ({ type, color, size, onClick }) => {
  let [pieceImg, setPieceImg] = useState('');

  useEffect(async () => {
    const img = await getImageByColorAndType(type, color);
    setPieceImg(img);
    console.log({pieceImg})
  }, []);

  return pieceImg ? (
    <Image src={pieceImg} height={size} width={size} onClick={onClick} />
  ) : (
    <div>{`${color}-${type}`}</div>
  );
};

export default ChessPiece;
