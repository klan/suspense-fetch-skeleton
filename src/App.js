import { Suspense } from "react";
import "./main.scss";
import Card from "./components/Card";
import CardSkeleton from "./components/CardSkeleton";

export default function App() {
  return (
    <div className="App">
      <div className="card-container">
        <Suspense fallback={<CardSkeleton amount={10} />}>
          <Card />
        </Suspense>
      </div>
    </div>
  );
}
