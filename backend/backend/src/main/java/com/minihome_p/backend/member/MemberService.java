package com.minihome_p.backend.member;

import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

@Log4j2
@Service
public class MemberService implements IMemberService{

    final static public int DATABASE_COMMUNICATION_TROUBLE = -1;
    final static public int INSERT_FAIL_AT_DATABASE = 0;
    final static public int INSERT_SUCCESS_AT_DATABASE = 1;
    final static public int IS_MEMBER = 2;

    @Autowired
    IMemberDaoMapper iMemberDaoMapper;

    @Override
    public int createAccount(Map<String, Object> msgMap) {
        log.info("createAccount()");

        boolean isMember = iMemberDaoMapper.isMember(msgMap.get("id"));

        log.info("isMember {}", isMember);

        if(!isMember) {

            int result = iMemberDaoMapper.insertMember(msgMap);
            switch (result) {
                case DATABASE_COMMUNICATION_TROUBLE:
                    log.info("DATABASE COMMUNICATION TROUBLE");
                    break;

                case INSERT_FAIL_AT_DATABASE:
                    log.info("INSERT FAIL AT DATABASE");
                    break;

                case INSERT_SUCCESS_AT_DATABASE:
                    log.info("INSERT SUCCESS AT DATABASE");
                    break;

            }
            return result;

        } else {
            return IS_MEMBER;
        }

//        return 1;

    }
}
