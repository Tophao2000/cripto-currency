import style from "./style.module.css";

function Skeleton() {
  return (
    <section className={style.skeletonContainer}>
      <div className={style.skeletonForm}>
        <div className={style.skeletonInput}></div>
        <div className={style.skeletonButton}></div>
      </div>

      <div className={style.skeletonTable}>
        <div className={style.skeletonThead}>
          <div className={style.skeletonTh}></div>
          <div className={style.skeletonTh}></div>
          <div className={style.skeletonTh}></div>
          <div className={style.skeletonTh}></div>
          <div className={style.skeletonTh}></div>
        </div>
        <div className={style.skeletonTbody}>
          <div className={style.skeletonTr}></div>
          <div className={style.skeletonTr}></div>
          <div className={style.skeletonTr}></div>
          <div className={style.skeletonTr}></div>
          <div className={style.skeletonTr}></div>
          <div className={style.skeletonTr}></div>
          <div className={style.skeletonTr}></div>
          <div className={style.skeletonTr}></div>
          <div className={style.skeletonTr}></div>
          <div className={style.skeletonTr}></div>
          <div className={style.skeletonTr}></div>
        </div>
      </div>

      <div className={style.skeletonPagination}></div>
    </section>
  );
}

export default Skeleton;
