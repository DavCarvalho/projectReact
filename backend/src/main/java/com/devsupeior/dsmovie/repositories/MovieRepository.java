package com.devsupeior.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsupeior.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {
	
}
