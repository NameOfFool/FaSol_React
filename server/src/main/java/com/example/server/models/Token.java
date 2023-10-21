package com.example.server.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "tokens")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Token {
    @Id
    public ObjectId id;
    public String refreshToken;
    public User user;
}
