const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isProjectPage = repository && !repository.endsWith(".github.io");
const basePath = isProjectPage ? `/${repository}` : "";

export default {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath,
};
