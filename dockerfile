FROM node:18.15 AS build

#/usr/src로 이동
WORKDIR /app

# package 복사
COPY /package*.json ./
RUN yarn install
#파일전체복사
COPY / .
RUN yarn build

FROM node:18.15  AS runner
WORKDIR /app

COPY --from=build /app ./

ADD test.sh ./
RUN chmod +x ./test.sh
# 운영환경 Install
#RUN yarn install --production 

EXPOSE 7878
CMD ["./test.sh"]