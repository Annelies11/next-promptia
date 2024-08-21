import Feed from "@components/Feed"
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">Tempat Berbagi
            <br className="max-md:hidden"/>
            <span className="orange_gradient text-center"> Kata-kata Umok</span>
            </h1>
            <p className="desc text-center">Umok adalah omong kosong yang keluar dari orang halu. Keluarkan <em>Umok</em>-mu di sini biar pikiranmu gak halu lagi.</p>
            <Feed />
    </section>
  )
}

export default Home