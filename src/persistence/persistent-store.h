#ifndef PERSISTENT_STORE_H
#define PERSISTENT_STORE_H

#include "../base/result.h"
#include "../state/application-state.h"
#include <string>
#include <string_view>

struct sqlite3;
class PersistentStore {
private:
    sqlite3* m_database = nullptr;
    std::string m_last_error;

    Result fail(std::string_view operation);
    Result execute(const char* sql, std::string_view operation);

public:
    PersistentStore() = default;
    ~PersistentStore();

    PersistentStore(const PersistentStore&) = delete;
    PersistentStore& operator=(const PersistentStore&) = delete;

    Result open(const std::string& path);
    Result load(ApplicationState& state);
    Result save(const ApplicationState& state);
    void close();
};

#endif
