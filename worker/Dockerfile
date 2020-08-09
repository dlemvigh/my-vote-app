FROM mcr.microsoft.com/dotnet/core/sdk:latest AS build
WORKDIR /app

COPY *.csproj ./
RUN dotnet restore

COPY . ./
RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/core/aspnet:latest AS runtime
WORKDIR /app

COPY --from=build /app/out .

ENTRYPOINT [ "dotnet", "worker.dll" ]