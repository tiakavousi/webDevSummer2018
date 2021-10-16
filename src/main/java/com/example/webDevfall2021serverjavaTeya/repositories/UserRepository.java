package com.example.webDevfall2021serverjavaTeya.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.example.webDevfall2021serverjavaTeya.models.User;

public interface UserRepository extends CrudRepository<User, Integer> {
	@Query(value="SELECT * From User WHERE user.username=:username AND user.password=:password", nativeQuery=true)
	public User findUserByCredentials(@Param("username") String u, @Param("password") String p);
}
