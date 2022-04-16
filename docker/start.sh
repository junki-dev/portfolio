#!/bin/bash
#*****************************************#
# 파일명 : start.sh 
# 작성자 : jkKim
#*****************************************#

# import
## 로그 형식 및 HELP 메시지
. scripts/help.sh

# Global Variable
## default docker-compose file
COMPOSE_FILE="docker-compose.yaml"
## docker service
SERVICES="portfolio"

# 시스템 구동
function systemStart() {

  infoln
  infoln "Starting Portfolio..."
  infoln "docker-compose -f $COMPOSE_FILE up -d $SERVICES"
  infoln
  
  # Docker compose 구동
  docker-compose -f $COMPOSE_FILE up -d $SERVICES
  sleep 2

  # 시스템 구동 확인
  docker ps -a

  infoln
  infoln "Started Portfolio..."
  infoln
}

function systemDown() {

  # Docker compose 중지 및 삭제
  docker-compose -f $COMPOSE_FILE down --volumes --remove-orphans
  sleep 2

  infoln
  infoln "Stoped Portfolio Syetem"
  infoln
}

# Parse commandline args
## Parse mode
command=""

if [[ $# -lt 1 ]] ; then
  printHelp $command
  exit 0
else
  command=$1
  shift
fi

# parse flags
while [[ $# -ge 1 ]] ; do
  key="$1"
  case $key in
  -h )
    printHelp $command
    exit 0
    ;;
  -db )
    SERVICES="portfolio_db"
    ;;
  -node )
    SERVICES="portfolio"
    ;;
  * )
    errorln "Unknown flag: $key"
    printHelp $command
    exit 1
    ;;
  esac
  shift
done

# 실행 명령어 구분
if [ "${command}" == "up" ]; then
  infoln "Starting Portfolio System"
  systemStart
elif [ "${command}" == "down" ]; then
  infoln "Stopping Portfolio System"
  systemDown
else
  printHelp $command
  exit 1
fi