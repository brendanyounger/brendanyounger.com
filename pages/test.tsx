import H1 from "../components/notion/H1";
import P from "../components/notion/P";

export default function Test() {
  return (
    <div
      className="container mx-auto px-4 sm:px-6 lg:px-8 prose"
      style={{ maxWidth: 772 }}
    >
      <h1>Introduction</h1>
      <p>
        KySync is an efficient way to distribute new data which makes use of
        older (but similar) data that you may already have present locally.
        KySync supports HTTP v1.1, but can easily be extended to support any
        server protocol which supports range queries.
      </p>
      <p>
        KySync is <a href="/abc">released</a> under the MIT Open Source License
        (see COPYING in root of repository).
      </p>
      <p>
        The value proposition of KySync over Zsync is that it takes advantage of
        modern architecture features (multi-core multi-CPU systems as well as
        exceedingly fast IO subsystems, e.g. NVMe SSDs). KySync is 3x-10x (or
        more) faster than Zsync on such commonly available modern hardware. We
        have not spent much time optimizing KySync single-thread performance, so
        there are cases where with sufficiently high similarity, Zsync is faster
        when less then 4 threads are used in KySync.
      </p>
      <p>During the development of KySync, two side projects emerged:</p>
      <ul>
        <li>
          KyDeps — a simple package manager for CMake/C++which grew organically
          as I was refactoring more and more of my CMake hacks to handle the
          needed dependencies;{" "}
        </li>
        <li>
          KyFarm — a simple distributed orchestrator that allows you to
          provision AWS instances, run experiments on them, collect the results
          through DynamoDB, and finally analyze them.
        </li>
      </ul>
      <p>
        Both of these could be expanded and offered separately, but in this
        document I will focus only on the bare minimum necessary to build
        KySync, use it, and reproduce the experimental results presented.
      </p>

      <p>
        We also have a{" "}
        <a href="https://www.icloud.com/keynote/0xYX50qkePJ4hi4nuu4fmyNPQ#Untitled">
          presentation
        </a>{" "}
        (WIP) explaining Rsync/Zsync basics, which eventually will cover KySync
        implementation details as well.
      </p>

      <p>
        Some frequently asked questions will be addressed in our{" "}
        <a href="https://www.notion.so/KySync-FAQ-43133445f5304cd69ebea8fbaf87e7a9">
          FAQ
        </a>
      </p>

      <h1>Performance</h1>

      <p>
        In this section we compare the performance of KySync and Zsync along
        several dimensions on synthetically generated data. While we believe
        that the experiments are reasonably representative, we welcome feedback
        from the community on other experiments that may represent their
        scenarios.
      </p>

      <h2>Dimensions</h2>

      <p>
        The following are the dimensions along which we compare performance:
      </p>
      <ul>
        <li>
          <em>Data Size</em> — the size of remote source data that needs to be
          synced locally. We tested data sizes of <strong>128 MiB</strong>,{" "}
          <strong>512 MiB</strong>, <strong>2 GiB</strong>, and{" "}
          <strong>8 GiB</strong>.
        </li>
      </ul>
    </div>
  );
}
