import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

export default function Admin() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl max-w-4xl p-8">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold text-green-500 mb-2">Login</h2>
            <span className="border-2 w-10 border-green-500 inline-block mb-1"></span>
            <p className="text-gray-400 my-5 ">Faça login em sua conta</p>

            <div className="flex flex-col items-center">
              <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                <FaRegEnvelope className="text-gray-400 m-2" />
                <input
                  type="email "
                  name="email"
                  placeholder="Email"
                  className="bg-gray-100 outline-none text-sm flex-1"
                />
              </div>

              <div className="bg-gray-100 w-64 p-2 flex items-center mb-5">
                <MdLockOutline className="text-gray-400 m-2" />
                <input
                  type="password"
                  name="senha"
                  placeholder="Senha"
                  className="bg-gray-100 outline-none text-sm flex-1"
                />
              </div>

              <a className="flex w-64 mb-5 text-xs" href="#">
                Esqueceu a senha?
              </a>

              <a
                href="#"
                className="border-2 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white mb-3"
              >
                Entrar
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
