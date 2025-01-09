# Etapa 1: Usar uma imagem Maven com OpenJDK 17
FROM maven:3.9.5-eclipse-temurin-17 AS build

# Atualize e instale dependências adicionais (como o git, se necessário)
RUN apt-get update && apt-get install -y git

WORKDIR /app

# Copiar o arquivo pom.xml e o código-fonte para o container
COPY pom.xml ./
COPY src ./src

# Verificar versão do Maven
RUN mvn -v

# Tentar compilar o projeto
RUN mvn clean package -DskipTests

# Etapa 2: Usar uma imagem OpenJDK leve para execução
FROM openjdk:17-jdk-slim

WORKDIR /app

# Copiar o .jar gerado na etapa anterior para o diretório de execução
COPY --from=build /app/target/ecommerce-backend.jar /app/ecommercerjs.jar

# Comando para executar a aplicação
ENTRYPOINT ["java", "-jar", "ecommercerjs.jar"]

#copilar no docfile
# docker run -p 8080:8080 ecommerce-backend
