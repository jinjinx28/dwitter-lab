export default function AvatarImage({ img, alt, style }) {
    return (
        <img 
            src={img} 
            alt={alt} 
            className={style} 
            onError={(e) => console.log("이미지 로딩 실패:", img)} 
        />
    );
}