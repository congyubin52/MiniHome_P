package com.minihome_p.backend.member;

import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@Log4j2
@RestController
@RequestMapping("/api/member")
public class MemberController {

    @Autowired
    MemberService memberService;

    @PostMapping("/signup")
    public int createAccount(@RequestBody Map<String, Object> msgMap) {
        log.info("id {}", msgMap.get("id"));

        int result = memberService.createAccount(msgMap);

        return result;
    }

}
