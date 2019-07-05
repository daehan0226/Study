---
layout: post
title: Encryption
categories: NETWORK

---

> # Encryption

* In computing, encryption is the **method** by which plaintext or any other type of **data is converted from a readable form to an encoded version that can only be decoded by another entity if they have access to a decryption key**. 

* Encryption is one of the most important methods for providing data **security**, especially for end-to-end protection of data transmitted across networks.

* Encryption is widely used on the internet to protect user information being sent between a browser and a server, including passwords, payment information and other personal information that should be considered private. 

* Organizations and individuals also commonly use encryption to protect sensitive data stored on computers, servers and mobile devices like phones or tablets.

> # How encryption works

* Unencrypted data, often referred to as plaintext, is encrypted using an encryption algorithm and an encryption key. This process generates ciphertext that can only be viewed in its original form if decrypted with the correct key. Decryption is simply the inverse of encryption, following the same steps but reversing the order in which the keys are applied. 

* Today's most widely used encryption algorithms fall into two categories: **symmetric and asymmetric**.

> Symmetric 

* Symmetric-key ciphers, also referred to as **"secret key,"** use a single key, sometimes referred to as a shared secret because **the system doing the encryption must share it with any entity it intends to be able to decrypt the encrypted data**. The most widely used symmetric-key cipher is the Advanced Encryption Standard (AES), which was designed to protect government classified information.

* Symmetric-key encryption is usually much faster than asymmetric encryption, but the sender must exchange the key used to encrypt the data with the recipient before the recipient can perform decryption on the ciphertext. **The need to securely distribute and manage large numbers of keys means most cryptographic processes use a symmetric algorithm to efficiently encrypt data**, but use an **asymmetric algorithm to securely exchange the secret key**.

* Asymmetric cryptography, also known as **public key cryptography**, uses two different but mathematically linked keys, **one public and one private**. The public key can be shared with everyone, whereas the private key must be kept secret. The RSA encryption algorithm is the most widely used public key algorithm, **partly because both the public and the private keys can encrypt a message; the opposite key from the one used to encrypt a message is used to decrypt it**. This attribute provides a method of assuring not only confidentiality, but also the integrity, authenticity and nonreputability of electronic communications and data at rest through the use of digital signatures.

> Benefits of encryption
* The primary purpose of encryption is to protect the confidentiality of digital data stored on computer systems or transmitted via the internet or any other computer network. A number of organizations and standards bodies either recommend or require sensitive data to be encrypted in order to prevent unauthorized third parties or threat actors from accessing the data. For example, the Payment Card Industry Data Security Standard requires merchants to encrypt customers' payment card data when it is both stored at rest and transmitted across public networks.

* Modern encryption algorithms also play a vital role in the security assurance of IT systems and communications as they can provide not only confidentiality, but also the following key elements of security(????):

1. Authentication: the origin of a message can be verified.
2. Integrity: proof that the contents of a message have not been changed since it was sent.
3. Nonrepudiation: the sender of a message cannot deny sending the message.
4. Types of encryption
* Traditional public key cryptography depends on the properties of large prime numbers and the computational difficulty of factoring those primes. Elliptical curve cryptography (ECC) enables another kind of public key cryptography that depends on the properties of the elliptic curve equation; the resulting cryptographic algorithms can be faster and more efficient and can produce comparable levels of security with shorter cryptographic keys. As a result, ECC algorithms are often implemented in internet of things devices and other products with limited computing resources.


-------------------------------

As development of quantum computing continues to approach practical application, quantum cryptography will become more important. Quantum cryptography depends on the quantum mechanical properties of particles to protect data. In particular, the Heisenberg uncertainty principle posits that the two identifying properties of a particle -- its location and its momentum -- cannot be measured without changing the values of those properties. As a result, quantum encoded data cannot be copied because any attempt to access the encoded data will change the data. Likewise, any attempt to copy or access the data will cause a change in the data, thus notifying the authorized parties to the encryption that an attack has occurred.

Encryption is used to protect data stored on a system (encryption in place or encryption at rest); many internet protocols define mechanisms for encrypting data moving from one system to another (data in transit).

Some applications tout the use of end-to-end encryption (E2EE) to guarantee data being sent between two parties cannot be viewed by an attacker that intercepts the communication channel. Use of an encrypted communication circuit, as provided by Transport Layer Security (TLS) between web client and web server software, is not always enough to insure E2EE; typically, the actual content being transmitted is encrypted by client software before being passed to a web client, and decrypted only by the recipient.

Messaging apps that provide E2EE include Facebook's WhatsApp and Open Whisper Systems' Signal. Facebook Messenger users may also get E2EE messaging with the "Secret Conversations" option.

How encryption is used
Encryption was almost exclusively used only by governments and large enterprises until the late 1970s when the Diffie-Hellman key exchange and RSA algorithms were first published -- and the first personal computers were introduced. By the mid-1990s, both public key and private key encryption were being routinely deployed in web browsers and servers to protect sensitive data.

Cryptographic hash functions
Encryption is usually a two-way function, meaning the same algorithm can be used to encrypt plaintext and to decrypt ciphertext. A cryptographic hash function can be viewed as a type of one-way function for encryption, meaning the function output cannot easily be reversed to recover the original input. Hash functions are commonly used in many aspects of security to generate digital signatures and data integrity checks. They take an electronic file, message or block of data and generate a short digital fingerprint of the content called a message digest or hash value. The key properties of a secure cryptographic hash function are:

Output length is small compared to input
Computation is fast and efficient for any input
Any change to input affects lots of output bits
One-way value -- the input cannot be determined from the output
Strong collision resistance -- two different inputs can't create the same output
The ciphers in hash functions are optimized for hashing: They use large keys and blocks, can efficiently change keys every block and have been designed and vetted for resistance to related-key attacks. General-purpose ciphers used for encryption tend to have different design goals. For example, the symmetric-key block cipher AES could also be used for generating hash values, but its key and block sizes make it nontrivial and inefficient.

Contemporary encryption issues
For any cipher, the most basic method of attack is brute force; trying each key until the right one is found. The length of the key determines the number of possible keys, hence the feasibility of this type of attack. Encryption strength is directly tied to key size, but as the key size increases so, too, do the resources required to perform the computation.

Alternative methods of breaking a cipher include side-channel attacks, which don't attack the actual cipher but the physical side effects of its implementation. An error in system design or execution can allow such attacks to succeed.

Attackers may also attempt to break a targeted cipher through cryptanalysis, the process of attempting to find a weakness in the cipher that can be exploited with a complexity less than a brute-force attack. The challenge of successfully attacking a cipher is easier if the cipher itself is already flawed. For example, there have been suspicions that interference from the National Security Agency weakened the Data Encryption Standard algorithm, and following revelations from former NSA analyst and contractor Edward Snowden, many believe the NSA has attempted to subvert other cryptography standards and weaken encryption products.

More recently, law enforcement agencies such as the FBI have criticized technology companies that offer end-to-end encryption, arguing that such encryption prevents law enforcement from accessing data and communications even with a warrant. The FBI has referred to this issue as "Going Dark," while the U.S. Department of Justice has proclaimed the need for "responsible encryption" that can be unlocked by technology companies under a court order.
